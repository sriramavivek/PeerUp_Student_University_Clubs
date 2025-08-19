import ClubBlock from "./ClubBlock";

export default function Following(){
    return(
        <div className="d-flex flex-row gap-5 flex-wrap mt-3" id="clubs">
            <ClubBlock/>
            <ClubBlock/>
            <ClubBlock/>
            <ClubBlock/>
            <ClubBlock/>
            <ClubBlock/>
            <ClubBlock/>
            <ClubBlock/>
        </div>
    );
}