const axios = require('axios');

const JENKINS_URL = 'http://your-jenkins-url/api/json';
const JENKINS_USER = 'your-jenkins-user';
const JENKINS_API_TOKEN = 'your-jenkins-api-token';

const getPipelineStatus = async () => {
    try {
        const response = await axios.get(`${JENKINS_URL}/queue/api/json`, {
            auth: {
                username: JENKINS_USER,
                password: JENKINS_API_TOKEN
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Jenkins data:', error);
        throw error;
    }
};

module.exports = { getPipelineStatus };
