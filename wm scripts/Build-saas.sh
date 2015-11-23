cd
cd Installations/saas_setup/shortcuts/unix/
sh t1stop.sh 
sh t2stop.sh 

cd
cd codeBase/WaveMaker-Studio-Enterprise/
mvn -Pwmstudio-local clean install -DskipTests -Dproject.props.file=../../build-helpers/filters/saas-wmstudio-local.props

cd 
cd Installations/saas_setup/shortcuts/unix/
sh t1start.sh 
echo '============================================================================================================'
echo '************************************************ t1.start***************************************************'
sh t2start.sh 
echo '************************************************ t2.start***************************************************'
