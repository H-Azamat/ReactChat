import loading from '../../../assets/img/loading.gif';

const Loading = () => {
    return(
        <div className="loading">
            <img src={loading} alt="loading..." className="loading-gif" />
        </div>
    )
}

export default Loading;