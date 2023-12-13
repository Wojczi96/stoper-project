import styles from './DisplayTime.module.scss';

const DisplayTime = props => {

    const timer = time => {
    let hours = Math.floor((time / 1000 ) / 60 / 60);
    let minutes = Math.floor(((time / 1000 ) / 60) % 60);
    let seconds = Math.floor((time / 1000 ) % 60);
    let miliSeconds = Math.floor((time % 1000) );



    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return (`${hours} : ${minutes} : ${seconds} : ${miliSeconds}`);


    // return hours + ':' + minutes + ':' + seconds + ':' + miliSeconds;
    }
    return (
        <div className={styles.display}>
            {timer(props.time)}
        </div>
    )
}

export default DisplayTime;
