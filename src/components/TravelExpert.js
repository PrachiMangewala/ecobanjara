export default function TravelExpert(props) {
    const {TravelExpert} = props;
    return (
        <div class="Expert">
           <img class="expertImage" src={TravelExpert.image} alt={TravelExpert.name}></img> 
           <p class="Name">{TravelExpert.name}</p>
        </div>
    )
}
