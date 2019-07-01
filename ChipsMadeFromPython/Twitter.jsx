import { TwitterTweetEmbed } from 'react-twitter-embed';

const Tweet = props => {
    const {id} = props;
    return <div className="centerContent">
        <div className="selfCenter">
            <TwitterTweetEmbed tweetId={id} />
        </div>
    </div>
};

export default Tweet;

