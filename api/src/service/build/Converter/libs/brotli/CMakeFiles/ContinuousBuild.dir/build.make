# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/victor/Documentos/EYEVISION/PotreeConverter-develop

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/victor/Documentos/EYEVISION/PotreeConverter-develop/build

# Utility rule file for ContinuousBuild.

# Include the progress variables for this target.
include Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/progress.make

Converter/libs/brotli/CMakeFiles/ContinuousBuild:
	cd /home/victor/Documentos/EYEVISION/PotreeConverter-develop/build/Converter/libs/brotli && /usr/bin/ctest -D ContinuousBuild

ContinuousBuild: Converter/libs/brotli/CMakeFiles/ContinuousBuild
ContinuousBuild: Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/build.make

.PHONY : ContinuousBuild

# Rule to build all files generated by this target.
Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/build: ContinuousBuild

.PHONY : Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/build

Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/clean:
	cd /home/victor/Documentos/EYEVISION/PotreeConverter-develop/build/Converter/libs/brotli && $(CMAKE_COMMAND) -P CMakeFiles/ContinuousBuild.dir/cmake_clean.cmake
.PHONY : Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/clean

Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/depend:
	cd /home/victor/Documentos/EYEVISION/PotreeConverter-develop/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/victor/Documentos/EYEVISION/PotreeConverter-develop /home/victor/Documentos/EYEVISION/PotreeConverter-develop/Converter/libs/brotli /home/victor/Documentos/EYEVISION/PotreeConverter-develop/build /home/victor/Documentos/EYEVISION/PotreeConverter-develop/build/Converter/libs/brotli /home/victor/Documentos/EYEVISION/PotreeConverter-develop/build/Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : Converter/libs/brotli/CMakeFiles/ContinuousBuild.dir/depend

