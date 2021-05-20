import {useState} from "react";

const ProfileSocialEdit = ({social, setSocial}) => {

    let [telegram, setTelegram] = useState(social.telegram || '');
    let [github, setGithub] = useState(social.github || '');
    let [youtube, setYoutube] = useState(social.youtube || '');
    let [vk, setVk] = useState(social.vk || '');
    let [instagram, setInstagram] = useState(social.instagram || '');

    const updateSocial = (arr) => {
        let social = arr;
        let filterSocial = {...social};
        for(const item in social){
            social[item] === '' ? filterSocial[item] = null : filterSocial[item] = social[item];
        }
        setSocial(filterSocial)
    }

    return(
        <div className="profile-social__edit">

            <div className="profile-social-item__edit">
                <h2 className="profile-social-title__edit">Telegram:</h2>
                <span className="profile-social-text__edit">https://t.me/</span>
                <input defaultValue={telegram} type="text"
                       onChange={(e) => {
                           setTelegram(e.currentTarget.value);
                           updateSocial({
                               telegram: e.currentTarget.value,
                               github, youtube, vk, instagram
                           })
                       }}
                       className="profile-social-input__edit"/>
            </div>

            <div className="profile-social-item__edit">
                <h2 className="profile-social-title__edit">Github:</h2>
                <span className="profile-social-text__edit">https://github.com/</span>
                <input defaultValue={github} type="text"
                       onChange={(e) => {
                           setGithub(e.currentTarget.value);
                           updateSocial({
                               telegram,
                               github: e.currentTarget.value,
                               youtube, vk, instagram
                           })
                       }}
                       className="profile-social-input__edit"/>
            </div>

            <div className="profile-social-item__edit">
                <h2 className="profile-social-title__edit">Youtube:</h2>
                <span className="profile-social-text__edit">https://www.youtube.com/channel/</span>
                <input defaultValue={youtube} type="text"
                       onChange={(e) => {
                           setYoutube(e.currentTarget.value);
                           updateSocial({
                               telegram, github,
                               youtube: e.currentTarget.value,
                               vk, instagram
                           })
                       }}
                       className="profile-social-input__edit"/>
            </div>

            <div className="profile-social-item__edit">
                <h2 className="profile-social-title__edit">Vk:</h2>
                <span className="profile-social-text__edit">https://vk.com/</span>
                <input defaultValue={vk} type="text"
                       onChange={(e) => {
                           setVk(e.currentTarget.value);
                           updateSocial({
                               telegram, github, youtube,
                               vk: e.currentTarget.value,
                               instagram
                           })
                       }}
                       className="profile-social-input__edit"/>
            </div>

            <div className="profile-social-item__edit">
                <h2 className="profile-social-title__edit">Instagram:</h2>
                <span className="profile-social-text__edit">https://instagram.com/</span>
                <input defaultValue={instagram} type="text"
                       onChange={(e) => {
                           setInstagram(e.currentTarget.value);
                           updateSocial({
                               telegram, github, youtube, vk,
                               instagram: e.currentTarget.value
                           })
                       }}
                       className="profile-social-input__edit"/>
            </div>

        </div>
    )
}

export default ProfileSocialEdit;