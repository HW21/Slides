/* 
Place Images in a div which is: 
* 50% of screen height 
* 100% of screen width
Force them to fit, while retaining aspect ratio 
*/

export const ImageWrapper = props => {
    return <div style={{height:'85vh', width:'100%'}}>
        {props.children}
    </div>
};

export const Image = props => {
    const {src, style, ...other} = props;
    const myStyle = {
        ...style,
        height:"100%",
        maxWidth:"100%", 
        maxHeight:"100%"
    };
    return <ImageWrapper>
        <img style={myStyle} src={src} {...other}/>
    </ImageWrapper>
}
export default Image;

