import {TwitterFollowCard} from './components/TwitterFollowCard'

function App () {
    return (
        <div className="container">
            <TwitterFollowCard isFollowing user="johndoe">
                John Doe
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} user="potus">
                Potus
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} user="namesoun">
                Name Soundalikes
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing user="kfc_es">
                KFC ES
            </TwitterFollowCard>
        </div>
    )
}

export default App