import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Main(props) {
    const [filteredData, setFilteredData] = useState(props.data);

    const handleHornsChange = (e) => {
        const selectedHorns = e.target.value;
        if (selectedHorns !== "") {
            const filteredData = props.data.filter(element => element.horns === parseInt(selectedHorns));
            setFilteredData(filteredData);
        } else {
            setFilteredData(props.data);
        }
    };

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <Form.Select onChange={handleHornsChange}>
                <option value="">Filter By Horns</option>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="100">100 Horns</option>
            </Form.Select>

            {filteredData.map(Beast => {
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
