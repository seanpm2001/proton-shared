export const getFeature = (featureCode: string) => ({
    url: `features/${featureCode}`,
    method: 'get',
});

export const updateFeatureValue = (featureCode: string, Value: any) => ({
    url: `features/${featureCode}/value`,
    method: 'put',
    data: { Value },
});
