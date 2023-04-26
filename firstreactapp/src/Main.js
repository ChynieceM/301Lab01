import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Main(props) { //main is a direct child of App and gets props from parent
    const [filteredData, setFilteredData] = useState(props.data);
//state is used to handle the filtered data based on the selected horns number
//main is initialized to the data from props
    const handleHornsChange = (e) => {
        //handleHornsChange handles the event change where horns are filtered
        const selectedHorns = e.target.value; //the event target value is set to selectedhorns
        if (selectedHorns !== "") { //if a horn value is selected
            const filteredData = props.data.filter(element => element.horns === parseInt(selectedHorns));
           //filter the data array based on the selected horn value
           //parseInt converts the string to a number to compare it to the horn value
            setFilteredData(filteredData); //update the state with the filtered data
        } else { //if no horns is selected
            setFilteredData(props.data); //reset the filtered data to the original data from props
        }
    };

    return (
        <div className="d-flex justify-content-center flex-wrap">
           {/* renders a form with an onChnage event handler */}
            <Form.Select onChange={handleHornsChange}>
                {/* renders option elements with empty value as default options */}
                <option value="">Filter By Horns</option> 
                {/* renders option elements with horn values */}
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="100">100 Horns</option>
            </Form.Select>

            {filteredData.map(Beast => {
                //renders filtered data array using map funciton, props passed from parent
                return (
                    <HornedBeast
                        favorites={0}
                        key={Beast._id}
                        image={Beast.image_url}
                        updateFunction={props.updateFunction}
                        variable={Beast}
                        SelectedBeastFunction={props.SelectedBeastFunction}
                        CurrentBeastInstance={props.currentSelectedBeast}
                    />
                )
            })}
        </div>
    );
}

export default Main;
