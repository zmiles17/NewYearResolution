import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faBookOpen, faUtensils, faBicycle, faUsers } from '@fortawesome/free-solid-svg-icons';
import './reset.css';
import './index.css';

library.add(faChevronLeft, faChevronRight, faBookOpen, faUtensils, faBicycle, faUsers)

const Calendar = props => (
    <React.Fragment>
        <h1>
            <FontAwesomeIcon
                icon="chevron-left"
                onClick={props.previousMonth}
            />
            {props.currentMonth}
            <FontAwesomeIcon
                icon="chevron-right"
                onClick={props.nextMonth}
            />
        </h1>
        <div className='Month-Container'>
            {props.days
                .map((e, i) =>
                    <Resolution
                        key={i}
                    />)}
        </div>
    </React.Fragment>
)

const Resolution = props =>
    (
        <div className='Day-Container'>
            <FontAwesomeIcon icon='book-open' />
            <FontAwesomeIcon icon='utensils' />
            <FontAwesomeIcon icon='bicycle' />
            <FontAwesomeIcon icon='users' />
        </div>
    )



let date = new Date();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let counter = date.getMonth();
class App extends React.Component {
    state = {
        currentMonth: month[date.getMonth()],
        days: Array(31).fill(null)
    }
    nextMonth = () => {
        counter++;
        if (counter > 11) {
            counter = 0;
            date.setMonth(counter)
        }
        this.setState({ currentMonth: month[counter] })
    }
    previousMonth = () => {
        counter--;
        if (counter < 0) {
            counter = 11;
            date.setMonth(counter)
        }
        this.setState({ currentMonth: month[counter] })
    }
    completeResolution = () => {
        console.log('hi')
    }
    render() {
        return (
            <div className='App'>
                <main>
                    <Calendar
                        currentMonth={this.state.currentMonth}
                        nextMonth={this.nextMonth}
                        previousMonth={this.previousMonth}
                        days={this.state.days}
                        completeResolution={this.completeResolution}
                    />
                </main>
                <aside>
                    {/* <Statistic /> */}
                </aside>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

