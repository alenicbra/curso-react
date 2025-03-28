import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    { userName: 'nicolaldebravo', name: 'Alejandro Nicolalde Bravo', isFollowing: true },
    { userName: 'mirieta', name: 'Miriam Rodriguez Reina', isFollowing: true },
    { userName: 'nicolaldebravo', name: 'Alejandro Nicolalde Bravo', isFollowing: false },
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(user => (
                    <TwitterFollowCard
                        key={user.userName}
                        userName={user.userName}
                        name={user.name}
                        initialIsFollowing={user.isFollowing}
                    />
                ))
            }
        </section>
    )
    }