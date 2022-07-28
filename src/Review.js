import React, {useState} from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

class Review extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          person:reviews[0]
        };
    }

    checkIndex(currentIndex) {
        
        if (currentIndex > reviews.length -1) {
            return 0;
        }

        if (currentIndex < 0) {
            return reviews.length -1;
        }
        
        return currentIndex;
    }

    prevPerson() {
       let newIndex = this.checkIndex(this.state.index - 1);
       let prevPerson = reviews[newIndex];  
       this.setState({
            index: newIndex,
            person: prevPerson
       })     
    }

    nextPerson() {
        let newIndex = this.checkIndex(this.state.index + 1);
        let nextPerson = reviews[newIndex]; 
        this.setState({
            index: newIndex,
            person: nextPerson
        })  
    }

    randomPerson() {
        let randomNumber = Math.random() * reviews.length;
        let randomIndex = Math.floor(randomNumber);
        
        console.log(randomIndex);
        
        if (randomIndex === this.state.index) {
            randomIndex = randomIndex + 1;  
        }

        randomIndex = this.checkIndex(randomIndex);
        let randomPerson = reviews[randomIndex]; 

        this.setState({
            index: randomIndex,
            person: randomPerson
        })  
    }

    render() {
        return (
            <article className="review">
                <div className="img-container">
                    <img src={this.state.person.image} alt={this.state.person.name} className="person-img"></img>
                    <span className="quote-icon">
                        <FaQuoteRight></FaQuoteRight>
                    </span>
                </div>
                <h4 className='author'>{this.state.person.name}</h4>
                <h1 className='job'>{this.state.person.job}</h1>
                <p className='info'>{this.state.person.text}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={() => this.prevPerson()}>
                        <FaChevronLeft></FaChevronLeft>
                    </button>

                    <button className="next-btn" onClick={() => this.nextPerson()}>
                        <FaChevronRight></FaChevronRight>
                    </button>
                    <button className="random-btn" onClick={() => this.randomPerson()}>

                    </button>
                </div>
            </article>  
        );
    }
}

export default Review;