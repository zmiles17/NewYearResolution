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
            <FontAwesomeIcon icon="chevron-left" onClick={props.previousMonth} />
            {props.currentMonth}
            <FontAwesomeIcon icon="chevron-right" onClick={props.nextMonth} />
        </h1>
        <div className='Month-Container'>
            <div className='Day-Container'>

            </div>
        </div>
    </React.Fragment>
)

let date = new Date();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let counter = 0;
class App extends React.Component {
    state = {
        currentMonth: month[date.getMonth()],
    }
    nextMonth = () => {
        counter++;
        if (date.getMonth() === 11 || counter > 11) {
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
    render() {
        return (
            <div className='App'>
                <main>
                    <Calendar currentMonth={this.state.currentMonth} nextMonth={this.nextMonth} previousMonth={this.previousMonth} />
                </main>
                <aside>
                    {/* <Statistic /> */}
                </aside>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

