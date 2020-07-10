export function getUserRequirements(ageGroupParam) {
    console.log(`%cgetUserRequirements function called using code: ${ageGroupParam}`,'color:green');
    let requirements;
    if (ageGroupParam === "F19-30") {
        requirements = {
            'fruit' : 2,
            'protein' : 5.5,
            'dairy' : 3, 'veg' : 2.5,
            'grains' : 6
        }
    }
    else if (ageGroupParam === "M19-30") {
        requirements = {
            "fruit": 2,
            "protein": 5.5,
            "dairy": 3,
            "veg": 2.5,
            "grains": 6
        };
    } else if (ageGroupParam === "M51+") {
        console.log("Match: M51+");
        requirements = {
            "fruit": 2,
            "protein": 5.5,
            "dairy": 3,
            "veg": 2.5,
            "grains": 6
        };
    } else if (ageGroupParam === "F31-50" || "M9-13") {
        requirements = {
            "fruit": 1.5,
            "protein": 5,
            "dairy": 3,
            "veg": 2.5,
            "grains": 6
        };
    } else if (ageGroupParam === "F51+") {
        requirements = {
            "fruit": 1.5,
            "protein": 5,
            "dairy": 3,
            "veg": 2,
            "grains": 5
        };
    } else if (ageGroupParam === "F9-13") {
        requirements = {
            "fruit": 1.5,
            "protein": 5,
            "dairy": 3,
            "veg": 2,
            "grains": 5
        };
    } else if (ageGroupParam === "F14-18") {
        requirements = {
            "fruit": 1.5,
            "protein": 5,
            "dairy": 3,
            "veg": 2.5,
            "grains": 6
        };
    } else if (ageGroupParam === "F2-3" || "M2-3" || "M4-8") {
        requirements = {
            "fruit": 1,
            "protein": 2,
            "dairy": 2,
            "veg": 1,
            "grains": 3
        };
    } else if (ageGroupParam === "M31-50") {
        requirements = {
            "fruit": 2,
            "protein": 6,
            "dairy": 3,
            "veg": 3,
            "grains": 7
        };
    } else if (ageGroupParam === "M14-18") {
        requirements = {
            "fruit": 2,
            "protein": 6.5,
            "dairy": 3,
            "veg": 3,
            "grains": 8
        };
        FoodPlate.user.userReq = {
            "fruit": req.fruit,
            "protein": req.protein,
            "grain": req.grain,
            "veg": req.veg
        };
    }
    return requirements;
}
