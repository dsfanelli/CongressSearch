import { React } from "react";

const SearchBills = (props) => {
  const { formData, handleChange } = props;
  return (
    <div className="searchForm">
      <div className="formControl">
        <div className="formLabel">
          <label>Subject</label>
        </div>
        <div>
          <select
            name="primary_subject"
            onChange={handleChange}
            value={formData.primary_subject}
          >
            <option value=""></option>
            <option value="Economics and Public Finance">
              Economics and Public Finance
            </option>
            <option value="Science, Technology, Communications">
              Science, Technology, Communications
            </option>
            <option value="Taxation">Taxation</option>
            <option value="Housing and Community Development">
              Housing and Community Development
            </option>
            <option value="Congress">Congress</option>
            <option value="Energy">Energy</option>
            <option value="Transportation and Public Works">
              Transportation and Public Works
            </option>
            <option value="International Affairs">International Affairs</option>
            <option value="Families">Families</option>
            <option value="Social Welfare">Social Welfare</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Foreign Trade and International Finance">
              Foreign Trade and International Finance
            </option>
            <option value="Agriculture and Food">Agriculture and Food</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">
          <label>sponsor name</label>
        </div>
        <div>
          <input
            type="text"
            name="sponsor_name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">
          <label>sponsor state (including DC)</label>
        </div>
        <div>
          <select
            name="sponsor_state"
            onChange={handleChange}
            value={formData.sponsor_state}
          >
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
        <div className="formLabel">
          <label>sponsor party</label>
        </div>
        <div>
          <select
            name="sponsor_party"
            onChange={handleChange}
            value={formData.sponsor_party}
          >
            <option value=""></option>
            <option value="R">Republican</option>
            <option value="D">Democrat</option>
            <option value="I">Independent</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">
          <label>is active</label>
        </div>
        <div>
          <select name="active" onChange={handleChange} value={formData.active}>
            <option value=""></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">
          <label>passed the House</label>
        </div>
        <div>
          <select
            name="house_passage"
            onChange={handleChange}
            value={formData.house_passage}
          >
            <option value=""></option>
            <option value="true">Passed</option>
            <option value="false">Pending or Failed</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">
          <label>passed the Senate</label>
        </div>
        <div>
          <select
            name="senate_passage"
            onChange={handleChange}
            value={formData.senate_passage}
          >
            <option value=""></option>
            <option value="true">Passed</option>
            <option value="false">Pending or Failed</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">
          <label>enacted</label>
        </div>
        <div>
          <select
            name="enacted"
            onChange={handleChange}
            value={formData.enacted}
          >
            <option value=""></option>
            <option value="true">Yes</option>
            <option value="false">Pending or Failed</option>
          </select>
        </div>
      </div>
      <div className="formControl">
        <div className="formLabel">
          <label>vetoed</label>
        </div>
        <div>
          <select name="vetoed" onChange={handleChange} value={formData.vetoed}>
            <option value=""></option>
            <option value="true">Yes</option>
            <option value="false">Pending or Failed</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export { SearchBills };
