import React from 'react'
import ReactDOM from 'react-dom';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'

const Loader = (props) => {

    const {
        in: loading,
        enter: enterTime = 500,
        exit: exitTime = 500,
        size = 40,
        disableShrink = false,
        thickness = 3.6,
        value = 0,
        variant = 'indeterminate',
        color,
        backgroundColor
    } = props

    const circularProps = {
        size,
        disableShrink,
        thickness,
        value,
        variant,
        style: {
            color
        }
    }

    const portalStyle = {
        position: "absolute",
        top: 0,
        backgroundColor,
        zIndex: 2000,
        minWidth: "100%"
    }

    if( !props.fade ) {
        return ReactDOM.createPortal(
            <div>
                <Collapse
                    style={portalStyle}
                    in={loading}
                    timeout={
                        {
                            enter: enterTime,
                            exit: exitTime
                        }
                    }
                >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <CircularProgress {...circularProps} />
                        </Grid>
                    </Grid>
                </Collapse>
            </div>, document.getElementById("loader-root")
        )
    }

    return ReactDOM.createPortal(
        <div>
            <Fade
                style={portalStyle}
                in={loading}
                timeout={
                    {
                        enter: enterTime,
                        exit: exitTime
                    }
                }
            >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item>
                        <CircularProgress {...circularProps} />
                    </Grid>
                </Grid>
            </Fade>
        </div>, document.getElementById("loader-root")
    )
}

export default Loader