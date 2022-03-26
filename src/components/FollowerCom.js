
const FollowerCom = ({info}) =>{
    console.log(info);
    return (
        <div className="follower">
            <img  src={info.avatar_url}/>
            <h4 className="follower_name">{`$${info.login}`}</h4>
            <a className="btn" href={info.html_url}>view profile </a>
        </div>
    )
}

export default FollowerCom