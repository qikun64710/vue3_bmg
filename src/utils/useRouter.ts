import router from '@/router'

function handleError(e: Error) {
    console.error(e)
}

// 路径跳转
export function useGoPath(name: string) {
    const { push } = router
    if (!name) return
    push({
        name
    }).catch(handleError)
}