import { React } from "react";
const SearchCongressMembers = (props) => {
  const { formData, handleChange } = props;
  return (
    <div className="searchForm">
      <div className="formControl">
        <div className="formLabel">first name</div>
        <div>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">last name</div>
        <div>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">state (or DC)</div>
        <div>
          <select name="state" onChange={handleChange} value={formData.state}>
            <option value=""></option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">party</div>
        <div>
          <select name="party" onChange={handleChange} value={formData.party}>
            <option value=""></option>
            <option value="R">R</option>
            <option value="D">D</option>
            <option value="I">I</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">in office</div>
        <div>
          <select
            name="in_office"
            onChange={handleChange}
            value={formData.in_office}
          >
            <option value=""></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">gender</div>
        <div>
          <select name="gender" onChange={handleChange} value={formData.gender}>
            <option value=""></option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export { SearchCongressMembers };
