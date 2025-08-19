import EventBlock from "./EventBlock";

export default function UpcomingEvents() {
    return (
        <div className="d-flex flex-column gap-5 flex-wrap mt-3" id="upevents">
            <EventBlock/>
            <EventBlock/>
            <EventBlock/>
            <EventBlock/>
            <EventBlock/>
        </div>
    );
}