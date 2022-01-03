import React from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';

export default function SetMeetingScreen() {
    
    return (
        <div>
            <ScheduleComponent height="550px">
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
}

