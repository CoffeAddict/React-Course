import { useState } from "react"


export function TwitterFollowCard ({ children, isFollowing, user }) {
    const [getIsFollowing, setIsFollowing] = useState(isFollowing)
    const imgSource = `https://unavatar.io/${user}`
    const buttonClass = getIsFollowing ? 'active' : ''
    const buttonText = getIsFollowing ? 'Following' : 'Follow'

    const handleClick = () => {
        setIsFollowing(!getIsFollowing)
    }

    return (
        <article className="tw-follow-card">
            <header>
                <img src={imgSource} alt={`${user} avatar`} />
                <div>
                    <strong>{children}</strong>
                    <span>@{user}</span>
                </div>
                <button className={buttonClass} onClick={handleClick}>
                    {buttonText}
                </button>
            </header>
        </article>
    )
}