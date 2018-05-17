import Resolutions from './resolutions';

const res = Resolutions.find({}).fetch();

// Resolutions.insert({
//   name: "Test Res"
// });
console.log(res);

export default {
  Query:{
    resolutions(){
      return res;
    }
  },

  Mutation:{
    createResolution(obj, {name}, context){
      const resolutionsId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionsId);
      //console.log("got here")
    }
  }
};
