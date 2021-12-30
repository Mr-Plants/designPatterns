import React, {useEffect} from 'react'

export default function createHoc() {
    const renderQueue = [] /* 待渲染队列 */
    return function Hoc(Component) {

        function RenderController(props) {  /* RenderController 用于真正挂载原始组件  */
            const {renderNextComponent, ...otherprops} = props
            useEffect(() => {
                renderNextComponent() /* 通知执行下一个需要挂载的组件任务 */
            }, [])
            return <Component  {...otherprops}  />
        }

        return class Wrap extends React.Component {
            constructor() {
                super()
                this.state = {
                    isRender: false
                }
                const tryRender = () => {
                    this.setState({
                        isRender: true
                    })
                }
                if (renderQueue.length === 0) this.isFirstRender = true
                renderQueue.push(tryRender)
            }

            isFirstRender = false      /* 是否是队列中的第一个挂载任务 */
            renderNextComponent = () => {  /* 从更新队列中，取出下一个任务，进行挂载 */
                if (renderQueue.length > 0) {
                    console.log('挂载下一个组件')
                    const nextRender = renderQueue.shift()
                    nextRender()
                }
            }

            componentDidMount() {  /* 如果是第一个挂载任务，那么需要 */
                this.isFirstRender && this.renderNextComponent()
            }

            render() {
                const {isRender} = this.state
                return isRender ? <RenderController {...this.props} renderNextComponent={this.renderNextComponent}/> :
                    '加载中。。。'
            }
        }
    }
}
