export default function ({ store, redirect }) {

    console.log('인증 미들웨어~!~!!');

    // 유저가 권한이 없다면
    if (!store.state.status) {
        return redirect('/')
    }
}