export default function ({ store, redirect }: { store: any, redirect: any }) {
  if (!store.state.isAuth) {
    return redirect('/login')
  }
}
