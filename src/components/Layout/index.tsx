export default function Layout({ children }: any) {
  return (
    <>
      <h1>nav</h1>
      <main>{children}</main>
      <h1>footer</h1>
    </>
  )
}