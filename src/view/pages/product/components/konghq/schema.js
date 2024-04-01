import * as yup from "yup"

export const setConfigSchema = yup
  .object({
    identifier: yup.string().required("Identifier field required"),
    configText: yup.string().required("ConfigText field required"),
    scriptContent: yup.string().required("ScriptContent field required"),
    validationTestCase: yup.string().required("ValidationTestCase field required"),
});

export const addAPIKeySchema = yup.object().shape({
  apiList: yup.array().of(
    yup.object().shape({
      apiKey: yup.string().required('API Key is required'),
      email: yup.string().email('Invalid email address').required('Email is required'),
      tier: yup.number().integer('Tier must be an integer').min(1, 'Tier must be above 0').required('Tier is required'),
      maxQuota: yup.number().integer('Max Quota must be an integer').min(1, 'Max Quota must be above 0').required('Max Quota is required'),
    })
  ),
});