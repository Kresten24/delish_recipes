import { MultiSelect } from "react-multi-select-component";
import './Filter.css'


const Filter = (props) => {

  return (
    <div className="filter">
      <MultiSelect
        options={props.options}
        value={props.filter}
        onChange={props.filterHandler}
        labelledBy="Select"
        overrideStrings={{
          "selectSomeItems": "Filter Cuisine"
        }}
        className='select'
      />
    </div>


  );
};
export default Filter;
