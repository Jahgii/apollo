import Resolutions from './resolutions';

//const res = Resolutions.find({}).fetch();

// Resolutions.insert({
//   name: "Test Res"
// });
//console.log(res);

export default {
  Query:{
    resolutions(obj, args, {userId}){
      // console.log(userId);
      const res = Resolutions.find({userId}).fetch();
      // console.log(res);
      return res;
    }
  },

  Mutation:{
    createResolution(obj, {name}, {userId}){
      console.log(name);
      const resolutionsId = Resolutions.insert({
        name,
        userId
      });
      console.log("Usuario: "+userId);
      console.log("resolutionsId: "+resolutionsId);
      return Resolutions.findOne(resolutionsId);
    }
  }
};
