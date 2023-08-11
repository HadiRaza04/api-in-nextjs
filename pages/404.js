import { Button } from 'antd';
import Link from 'next/link';
function Error() {
  return (
    <div style={{textAlign: "center", fontFamily: "cursive"}}>
      <h1>Page Not Found | 404</h1>
      <Button type='primary'><Link href="/">Go to Home</Link> </Button>
      <br />
      <Link href="/">Go to Home</Link>
    </div>
  )
}

export default Error
