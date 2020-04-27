import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'

const Loader = (props) => {

    const {
        in: loading,
        children,
        enter: enterTime = 500,
        exit: exitTime = 500,
        size = 40,
        disableShrink = false,
        thickness = 3.6,
        value = 0,
        variant = 'indeterminate'
    } = props
    const [showLoader, setShowLoader] = useState(true)

    const circularProps = {
        size,
        disableShrink,
        thickness,
        value,
        variant
    }

    return (
        <React.Fragment>
            {
                showLoader ?
                    (
                        <Fade
                            in={loading}
                            timeout={
                                {
                                    enter: enterTime,
                                    exit: exitTime
                                }
                            }
                            onExit={() => {
                                setTimeout(() => {
                                    setShowLoader((prev) => !prev)
                                }, exitTime);
                            }}
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
                    ) :
                    (
                        <Fade
                            in={!loading}
                            timeout={
                                {
                                    enter: enterTime,
                                    exit: exitTime
                                }
                            }
                        >
                            <div>{children}</div>
                        </Fade>
                    )
            }
        </React.Fragment>
    )
}

export default Loader