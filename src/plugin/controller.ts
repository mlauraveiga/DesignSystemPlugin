figma.showUI(__html__);

figma.ui.resize(390, 690);

console.clear();

async function importVariablesAsync() {
  const libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();

  const variablesInFirstLibrary = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(libraryCollections[0].key);

  const variableToImport = variablesInFirstLibrary.find((libVar) => libVar.resolvedType === 'FLOAT');

  const importedVariable = await figma.variables.importVariableByKeyAsync(variableToImport.key);

  console.log(figma.teamLibrary.getVariablesInLibraryCollectionAsync("0"));
  console.log(figma.importComponentByKeyAsync("1"));

  console.log(figma.importComponentByKeyAsync("60d0c7a86277abd1155709c7980447cdfbd67780"));

  return importedVariable;
}
//importVariablesAsync();

async function importComponentAsync() {
  console.log(await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync());
  //console.log(await figma.teamLibrary.getVariablesInLibraryCollectionAsync(figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync()[0].key));
  console.log(await figma.importComponentByKeyAsync("60d0c7a86277abd1155709c7980447cdfbd67780"));

  const collections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
  const collectionObjects = collections.map((collection) => {
    return {
      name: collection.name,
      key: collection.key,
      libraryName: collection.libraryName,
    };
  });

  console.log(collectionObjects[0]);
}
importComponentAsync();