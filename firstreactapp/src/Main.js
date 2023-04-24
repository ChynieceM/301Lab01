import HornedBeast from './HornedBeast';
<<<<<<< Updated upstream
import data from './data.json';
=======
//import data from './data.json';

>>>>>>> Stashed changes
//this is the main component that has 2 hornbeast components with 2 properties each
function Main() {
    return (
<<<<<<< Updated upstream
        <div class="d-flex justify-content-space-center flex-wrap">
            {data.map(Beast=>{
=======
        <div class="d-flex justify-content-center flex-wrap">
            {props.data.map(Beast=>{
>>>>>>> Stashed changes
                return(
                <HornedBeast favorites={0}
                key={Beast._id}
                title={Beast.title}
                id={Beast._id}
                description={Beast.description}
                image={Beast.image_url}
<<<<<<< Updated upstream
=======
                updateFunction={props.updateFunction}
                variable={Beast}
                SelectedBeastFunction={props.SelectedBeastFunction}
                CurrentBeastInstance={props.currentSelectedBeastVariable}
>>>>>>> Stashed changes
                />

            )})}

            {/* <HornedBeast title={data[0].title} description={data[0].description} image={data[0].image_url} />
            <HornedBeast title={data[1].title} description={data[1].description} image={data[1].image_url} />
            <HornedBeast title={data[2].title} description={data[2].description} image={data[2].image_url} />
            <HornedBeast title={data[3].title} description={data[3].description} image={data[3].image_url} />
            <HornedBeast title={data[4].title} description={data[4].description} image={data[4].image_url} />
            <HornedBeast title={data[5].title} description={data[5].description} image={data[5].image_url} />
            <HornedBeast title={data[6].title} description={data[6].description} image={data[6].image_url} />
            <HornedBeast title={data[7].title} description={data[7].description} image={data[7].image_url} />
            <HornedBeast title={data[8].title} description={data[8].description} image={data[8].image_url} />
            <HornedBeast title={data[9].title} description={data[9].description} image={data[9].image_url} />
            <HornedBeast title={data[10].title} description={data[10].description} image={data[10].image_url} />
            <HornedBeast title={data[11].title} description={data[11].description} image={data[11].image_url} />
            <HornedBeast title={data[12].title} description={data[12].description} image={data[12].image_url} />
            <HornedBeast title={data[13].title} description={data[13].description} image={data[13].image_url} />
            <HornedBeast title={data[14].title} description={data[14].description} image={data[14].image_url} />
            <HornedBeast title={data[15].title} description={data[15].description} image={data[15].image_url} />
            <HornedBeast title={data[16].title} description={data[16].description} image={data[16].image_url} />
            <HornedBeast title={data[17].title} description={data[17].description} image={data[17].image_url} />
            <HornedBeast title={data[18].title} description={data[18].description} image={data[18].image_url} />
        <HornedBeast title={data[19].title} description={data[19].description} image={data[19].image_url} />*/} 
        </div>
    );
}

export default Main;
