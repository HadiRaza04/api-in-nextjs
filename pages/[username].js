import { useRouter } from "next/router";


export default function myFunc() {
    const router = useRouter();
    const { username } = router.query;
    const { userpath} = router.pathname;

  return (
    <div>
      <h1>Hi {username}!</h1>
      <h1>Hello on {userpath}</h1>
    </div>
  )
}


