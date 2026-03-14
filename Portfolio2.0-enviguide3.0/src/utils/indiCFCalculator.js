export const calculateIndividualCarbonFootprint = (carbonData) => {
    const EF = {
        electricity: 0.708,
        fuel: 2.07,
        coal: 2.5,
        charcoal: 2.8,
        airTravel: 0.121,
        railTravel: 0.0078,
        metroTravel: 0.0139,
        busTravel: 0.054,
        electricBusTravel: 0.03782,
        cabTravel: 0.1431,
        electricCabTravel: 0.1035,
        petrol: 2.34,
        diesel: 2.71,
        veganMeal: 2019,
        vegetarianMeal: 2176,
        nonVegetarianMostMeals: 3781,
        nonVegetarianSomeMeals: 3017,
        nonVegetarianRareMeals: 2412,
    };

    // Convert kWh to MWh for calculation (divide by 1000)
    const electricityFootprint = (carbonData.electricityConsumption || 0) / 1000 * EF.electricity;
    const fuelFootprint = (carbonData.fuelAmount || 0) * EF.fuel;
    const coalFootprint = (carbonData.coal || 0) * EF.coal;
    const charcoalFootprint = (carbonData.charcoal || 0) * EF.charcoal;
    const airTravelFootprint = (carbonData.airTravel || 0) * EF.airTravel;
    const railTravelFootprint = (carbonData.railTravel || 0) * EF.railTravel;
    const metroTravelFootprint = (carbonData.metroTravel || 0) * EF.metroTravel;
    const busTravelFootprint = (carbonData.busTravel || 0) * EF.busTravel;
    const electricBusTravelFootprint = (carbonData.electricBusTravel || 0) * EF.electricBusTravel;
    const cabTravelFootprint = (carbonData.cabTravel || 0) * EF.cabTravel;
    const electricCabTravelFootprint = (carbonData.electricCabTravel || 0) * EF.electricCabTravel;
    const petrolFootprint = (carbonData.petrol || 0) * EF.petrol;
    const dieselFootprint = (carbonData.Diesel || 0) * EF.diesel;

    let mealFootprint = 0;
    const numOfMembers = carbonData.numOfMembers || 1;
    switch (carbonData.mealPreference) {
        case 'vegan':
            mealFootprint = EF.veganMeal * numOfMembers;
            break;
        case 'vegetarian':
            mealFootprint = EF.vegetarianMeal * numOfMembers;
            break;
        case 'non-veg-mostly':
            mealFootprint = EF.nonVegetarianMostMeals * numOfMembers;
            break;
        case 'non-veg-sometimes':
            mealFootprint = EF.nonVegetarianSomeMeals * numOfMembers;
            break;
        case 'non-veg-rarely':
            mealFootprint = EF.nonVegetarianRareMeals * numOfMembers;
            break;
        default:
            mealFootprint = 0;
    }

    const totalFootprint = (
        electricityFootprint +
        fuelFootprint +
        coalFootprint +
        charcoalFootprint +
        airTravelFootprint +
        railTravelFootprint +
        metroTravelFootprint +
        busTravelFootprint +
        electricBusTravelFootprint +
        cabTravelFootprint +
        electricCabTravelFootprint +
        petrolFootprint +
        dieselFootprint +
        mealFootprint
    ) / 1000; // Convert to tonnes CO₂e

    return {
        total: totalFootprint,
        electricity: electricityFootprint / 1000,
        fuel: fuelFootprint / 1000,
        travel: (airTravelFootprint + railTravelFootprint + metroTravelFootprint + busTravelFootprint + electricBusTravelFootprint + cabTravelFootprint + electricCabTravelFootprint) / 1000,
        meal: mealFootprint / 1000,
    };
};
