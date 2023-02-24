import { useRouter } from 'next/router';

function AboutPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>About us! ID: {id}</div>;
}

export default AboutPage;
