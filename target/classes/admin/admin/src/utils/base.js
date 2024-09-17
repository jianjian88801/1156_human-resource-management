const base = {
    get() {
        return {
            url : "http://localhost:8080/renliziyuanguanli/",
            name: "renliziyuanguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/renliziyuanguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "人力资源管理系统"
        } 
    }
}
export default base
