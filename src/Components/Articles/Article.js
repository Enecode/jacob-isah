import React from 'react';
import './Article.css';
import pythonfunction from '../image/Functions-in-Python.png';
import arraylist from '../image/ArrayList-vs-Array-In-Java.png';
import listcomprehension from '../image/List-comprehension-in-Python.png';
import javaBasics from '../image/the-Basics-of-Objects-and-Methods-in-In-Java.png';


function Article() {
    return (
        <div className="article-container">
        <h1 className="title-heading">Articles</h1>
        <div className="article-cards">
            <div className="article-card">
                {/* <img className="article-image" src={pythonfunction} alt="Functions in Python" /> */}
                <h3 className="title">Functions in Python</h3>
                <p className="article-description">
                    In this article, we will be building a simple e-wallet app with React and Node.js. The app will allow users to send and receive money from their friends and family.
                </p>
                <button className="readmore-link" href="https://dev.to/jacobe/functions-in-python-2nhc" target="_blank" rel="noopener noreferrer">
                    Read more
                </button>
            </div>

            <div className="article-card">
                {/* <img className="article-image" src={pythonfunction} alt="Functions in Python" /> */}
                <h3 className="title">Functions in Python</h3>
                <p className="article-description">
                    In this article, we will be building a simple e-wallet app with React and Node.js. The app will allow users to send and receive money from their friends and family.
                </p>
                <button className="readmore-link" href="https://medium.com/@isahjacob/how-to-build-a-simple-e-wallet-app-with-react-and-node-js-9a9c3c2c0e2d" target="_blank" rel="noopener noreferrer">
                    Read more
                </button>
            </div>

            <div className="article-card">
                {/* <img className="article-image" src={listcomprehension} alt="Functions in Python" /> */}
                <h3 className="title">List comprehension in Python</h3>
                <p className="article-description">
                    A list comprehension is surrounded by square brackets as well, but instead of data, expressions are entered, followed by for-loops and if clauses.
                </p>
                <button className="readmore-link" href="https://dev.to/jacobe/how-to-use-list-comprehension-in-python-3ece" target="_blank" rel="noopener noreferrer">
                    Read more
                </button>
            </div>

            <div className="article-card">
                {/* <img className="article-image" src={arraylist} alt="Functions in Python" /> */}
                <h3 className="title">ArrayList vs Array In Java</h3>
                <p className="article-description">
                    When should an Arrayor an Arraylist be used? What is the difference between constructing an Array and an ArrayList? In this post, I'll explain how these two forms of arrays work and let you chose which to use at the end.
                </p>
                <button className="readmore-link" href="https://dev.to/jacobe/arraylist-vs-array-in-java-4cej" target="_blank" rel="noopener noreferrer">
                    Read more
                </button>
            </div>

            <div className="article-card">
                {/* <img className="article-image" src={javaBasics} alt="Functions in Python" /> */}
                <h3 className="title">Exploring the Basics of Objects and Methods in Java</h3>
                <p className="article-description">
                    In this article, I'll explain the fundamentals of Java objects and methods and help you understand how they work.
                </p>
                <button className="readmore-link" href="https://dev.to/jacobe/exploring-the-basics-of-objects-and-methods-in-java-3dec" target="_blank" rel="noopener noreferrer">
                    Read more
                </button>
            </div>
        </div>
    </div>
    );
}

export default Article;



    
            