import * as React from 'react';
import {createDevTools} from 'redux-devtools';
import DockMonitor from "redux-devtools-dock-monitor";
import DiffMonitor from 'redux-devtools-diff-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import Dispatcher from 'redux-devtools-dispatch';
import Inspector from 'redux-devtools-inspector';

export const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
            <MultipleMonitors>
                <DiffMonitor theme='tomorrow'/>
                <Inspector supportImmutable={true} />
                <Dispatcher />
            </MultipleMonitors>
    </DockMonitor>
);