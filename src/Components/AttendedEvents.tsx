import EventBlock from "./EventBlock";

export default function AttendedEvents() {
    return(
        <div className="d-flex flex-column gap-5 flex-wrap mt-3" id="attendedevents">
            <EventBlock/>
            <EventBlock/>
            <EventBlock/>
            <EventBlock/>
            <EventBlock/>
        </div>
    );
}