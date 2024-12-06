import './style.css'
import {useEffect} from "react";
import {DONKEY_PAGE, FLEX_PAGE, HOME_PAGE, QUIZ_PAGE, WORDS_PAGE} from "../../constants/pages.js";

function Words({setNavState}) {
    let draggedElement = null;
    let prevPosition = null;

    function parseText() {
        const input = document.getElementById('inputText').value;
        if (!input) {
            return;
        }

        const words = input.split('-').map(item => item.trim());

        const lowerCaseWords = [];
        const upperCaseWords = [];
        const numbers = [];

        words.forEach(word => {
            if (!isNaN(word)) {
                numbers.push(Number(word));
            } else if (word[0] === word[0].toLowerCase()) {
                lowerCaseWords.push(word);
            } else {
                upperCaseWords.push(word);
            }
        });

        lowerCaseWords.sort();
        upperCaseWords.sort();
        numbers.sort();

        const associativeArray = {};
        let index = 1;
        lowerCaseWords.forEach(word => associativeArray[`a${index++}`] = word);
        index = 1;
        upperCaseWords.forEach(word => associativeArray[`b${index++}`] = word);
        index = 1;
        numbers.forEach(num => associativeArray[`n${index++}`] = num);

        displayElements(associativeArray);
    }

    function createDraggableElement(key, value) {
        const element = document.createElement('div');
        element.className = 'draggable-item-words';
        element.textContent = key + " " + value;
        element.style.backgroundColor = 'green';
        element.setAttribute('data-key', key);
        element.setAttribute('data-value', value);
        element.setAttribute('data-original-color', getRandomColor());

        element.addEventListener('mousedown', handleMouseDown);

        return element;
    }

    function displayElements(array) {
        const block = document.getElementById('block2');
        block.innerHTML = '';

        for (const [key, value] of Object.entries(array)) {
            const element = createDraggableElement(key, value);
            block.appendChild(element);
        }
    }

    function handleClick(event) {
        const block1 = document.getElementById('wordsContainer');
        const element = document.createElement('span');
        element.textContent = event.target.dataset.value;

        element.style.color = event.target.getAttribute('data-original-color');
        element.style.marginLeft = '10px';
        block1.appendChild(element);
    }

    function clearDisplay() {
        document.getElementById('wordsContainer').innerHTML = '';
    }

    function getRandomColor() {
        const colors = ['#432f2f', '#504335', '#56573d', '#435540', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function isMouseOverBlock(event, blockId, element) {
        const block = document.getElementById(blockId);
        const blockRect = block.getBoundingClientRect();
        const elementRect = element ? element.getBoundingClientRect() : {width: 0, height: 0};
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        return (
            mouseX >= blockRect.left + (elementRect.width / 2) &&
            mouseX + elementRect.width <= blockRect.right &&
            mouseY >= blockRect.top - 10 &&
            mouseY + elementRect.height + 10 <= blockRect.bottom
        );
    }

    function handleMouseDown(event) {
        draggedElement = event.target;
        const pos = draggedElement.getBoundingClientRect();

        prevPosition = {
            block: isMouseOverBlock(event, 'block3') ? 'block3' : 'block2',
            x: pos.x,
            y: pos.y
        };
        draggedElement.style.position = 'absolute';
        draggedElement.style.zIndex = '100';
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove(event) {
        if (draggedElement) {
            const elementRect = draggedElement.getBoundingClientRect();
            draggedElement.style.left = event.clientX - (elementRect.width / 2) + 'px';
            draggedElement.style.top = event.clientY + 10 + 'px';
        }
    }

    function resetElementPosition(element, block) {
        if (block === 'block2') {
            element.style.position = 'relative';
            element.style.left = '';
            element.style.top = '';
        } else {
            element.style.position = 'absolute';
            element.style.left = prevPosition.x + 'px';
            element.style.top = prevPosition.y + 'px';
        }
    }

    function handleMouseUp(event) {
        if (draggedElement) {
            draggedElement.style.zIndex = '10';

            if (isMouseOverBlock(event, 'block2')) {
                resetElementPosition(draggedElement, 'block2');
                draggedElement.style.backgroundColor = 'green';
                draggedElement.style.borderRadius = '100% 0 0 100%'
            } else if (isMouseOverBlock(event, 'block3', draggedElement)) {
                draggedElement.addEventListener('click', handleClick);
                draggedElement.style.borderRadius = '10px'
                draggedElement.style.backgroundColor = draggedElement.getAttribute('data-original-color');
            } else {
                resetElementPosition(draggedElement, prevPosition.block);
            }
            draggedElement = null;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }

    useEffect(() => {
        setNavState([HOME_PAGE, DONKEY_PAGE, FLEX_PAGE, QUIZ_PAGE]);
    }, []);

    return (
        <div className="container-words">
            <div className="words-words">
                <div id="wordsContainer" className="words__container-words bordered"></div>
                <button className="button-words bordered-words" id="buttonClear" onClick={clearDisplay}>Clear</button>
            </div>
            <div id="block2" className="drag-words block-words bordered-words drag-container-words"></div>
            <div id="block1" className="display-words block-words bordered-words">
                <div className="display__row-words">
                    <input className="input-words bordered-words" type="text" id="inputText"
                           placeholder="Input a dash-delimited string"/>
                    <button className="button-words bordered-words" id="buttonParse" onClick={parseText}>Parse</button>
                </div>
                <div id="block3" className="source-words block-words bordered-words drag-container-words"></div>
            </div>
        </div>
    );
}

export default Words;
