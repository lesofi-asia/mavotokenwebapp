export const getFileExtension=(filename)=>{
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}
export const s3PrefixForInvestor='investors';