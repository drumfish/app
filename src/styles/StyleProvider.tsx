import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, ThemeProvider, unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';
const theme = unstable_createMuiStrictModeTheme();

const StyleProvider: React.FC = ({children}) => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default StyleProvider;
