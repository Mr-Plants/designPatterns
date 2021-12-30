/* 创建 hoc  */
import {useEffect} from "react";
import createHoc from "./HOC";

const loadingHoc = createHoc()

function CompA() {
    useEffect(() => {
        console.log('组件A挂载完成')
    }, [])
    return <div>组件 A </div>
}

function CompB() {
    useEffect(() => {
        console.log('组件B挂载完成')
    }, [])
    return <div>组件 B </div>
}

function CompC() {
    useEffect(() => {
        console.log('组件C挂载完成')
    }, [])
    return <div>组件 C </div>
}

function CompD() {
    useEffect(() => {
        console.log('组件D挂载完成')
    }, [])
    return <div>组件 D </div>
}

function CompE() {
    useEffect(() => {
        console.log('组件E挂载完成')
    }, [])
    return <div>组件 E </div>
}


const ComponentA = loadingHoc(CompA)
const ComponentB = loadingHoc(CompB)
const ComponentC = loadingHoc(CompC)
const ComponentD = loadingHoc(CompD)
const ComponentE = loadingHoc(CompE)

export default function Index() {
    const [isShow, setIsShow] = useState(false)
    return <div>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        {isShow && <ComponentD/>}
        {isShow && <ComponentE/>}
        <button onClick={() => setIsShow(true)}> 挂载组件D ，E</button>
    </div>
}