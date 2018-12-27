import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faBookOpen, faUtensils, faBicycle, faUsers } from '@fortawesome/free-solid-svg-icons';
import './reset.css';
import './index.css';

library.add(faChevronLeft, faChevronRight, faBookOpen, faUtensils, faBicycle, faUsers)

const Calendar = props => (
    <React.Fragment>

        <h1>
            <FontAwesomeIcon icon="chevron-left" />
            {props.currentMonth}
            <FontAwesomeIcon icon="chevron-right" />
        </h1>
        <div className='Month-Container'>
            <div className='Day-Container'>

            </div>
        </div>
    </React.Fragment>
)

let date = new Date();
let dateWrapper = moment(date).format('MMMM')
class App extends React.Component {
    state = {
        currentMonth: dateWrapper,
    }
    
    render() {
        return (
            <div className='App'>
                <main>
                    <Calendar currentMonth={this.state.currentMonth} />
                </main>
                <aside>
                    {/* <Statistic /> */}
                </aside>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

