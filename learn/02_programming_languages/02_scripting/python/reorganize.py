#!/usr/bin/env python3
"""
Python Learning Repository Reorganization Script
Includes Python libraries (NumPy, SciPy, SymPy, etc.)
Reorganizes folders by category while preserving all internal content
"""

import os
import shutil
import sys
from pathlib import Path
from datetime import datetime

# Category mapping - moves folders to categorized directories
CATEGORY_MAPPING = {
    # ===== FUNDAMENTALS =====
    '00_introduction': '01_fundamentals/00_introduction',
    '01_variables': '01_fundamentals/01_variables',
    '02_data_types': '01_fundamentals/02_data_types',
    '03_operators': '01_fundamentals/03_operators',
    '04_input_output': '01_fundamentals/04_input_output',
    '05_type_casting': '01_fundamentals/05_type_casting',
    '06_strings': '01_fundamentals/06_strings',
    
    # ===== DATA STRUCTURES =====
    '07_lists': '02_data_structures/07_lists',
    '08_tuples': '02_data_structures/08_tuples',
    '09_sets': '02_data_structures/09_sets',
    '10_dictionaries': '02_data_structures/10_dictionaries',
    
    # ===== CONTROL FLOW =====
    '11_conditional_statements': '03_control_flow/11_conditional_statements',
    '12_loops': '03_control_flow/12_loops',
    
    # ===== FUNCTIONS & MODULES =====
    '13_functions': '04_functions_modules/13_functions',
    '14_modules_packages': '04_functions_modules/14_modules_packages',
    '15_file_handling': '04_functions_modules/15_file_handling',
    
    # ===== ADVANCED CONCEPTS =====
    '16_exception_handling': '05_advanced_concepts/16_exception_handling',
    '17_object_oriented_programming': '05_advanced_concepts/17_object_oriented_programming',
    '18_iterators_generators': '05_advanced_concepts/18_iterators_generators',
    '19_decorators': '05_advanced_concepts/19_decorators',
    '20_lambda_map_filter_reduce': '05_advanced_concepts/20_lambda_map_filter_reduce',
    '21_datetime': '05_advanced_concepts/21_datetime',
    
    # ===== TOOLS & LIBRARIES =====
    '22_regular_expressions': '06_tools_libraries/22_regular_expressions',
    '23_json': '06_tools_libraries/23_json',
    '24_virtual_environment': '06_tools_libraries/24_virtual_environment',
    '25_pip_package_management': '06_tools_libraries/25_pip_package_management',
    '26_testing': '06_tools_libraries/26_testing',
    '27_logging': '06_tools_libraries/27_logging',
    
    # ===== SPECIALIZED TOPICS =====
    '28_database_programming': '08_specialized_topics/28_database_programming',
    '29_multithreading': '08_specialized_topics/29_multithreading',
    '30_multiprocessing': '08_specialized_topics/30_multiprocessing',
    '31_network_programming': '08_specialized_topics/31_network_programming',
    
    # ===== APPLICATIONS =====
    '32_api_development': '09_applications/32_api_development',
    '33_web_scraping': '09_applications/33_web_scraping',
    '34_gui_development': '09_applications/34_gui_development',
    '35_data_analysis': '09_applications/35_data_analysis',
    '36_data_visualization': '09_applications/36_data_visualization',
    '37_machine_learning': '09_applications/37_machine_learning',
    '38_deep_learning': '09_applications/38_deep_learning',
    '39_web_development': '09_applications/39_web_development',
    '40_automation_scripting': '09_applications/40_automation_scripting',
    
    # ===== PROFESSIONAL =====
    '41_design_patterns': '10_professional/41_design_patterns',
    '42_performance_optimization': '10_professional/42_performance_optimization',
    '43_security_best_practices': '10_professional/43_security_best_practices',
    
    # ===== RESOURCES =====
    '44_projects_beginner': '11_resources/44_projects_beginner',
    '45_projects_intermediate': '11_resources/45_projects_intermediate',
    '46_projects_advanced': '11_resources/46_projects_advanced',
    '47_interview_preparation': '11_resources/47_interview_preparation',
    '48_cheat_sheets': '11_resources/48_cheat_sheets',
    '49_faq': '11_resources/49_faq',
}

# Python Libraries to create in 07_python_libraries
PYTHON_LIBRARIES = {
    'lib_numpy': 'NumPy - Numerical computing with arrays and matrices',
    'lib_scipy': 'SciPy - Scientific computing and algorithms',
    'lib_sympy': 'SymPy - Symbolic mathematics and algebra',
    'lib_pandas': 'Pandas - Data manipulation and analysis',
    'lib_matplotlib': 'Matplotlib - 2D and 3D visualization',
    'lib_seaborn': 'Seaborn - Statistical data visualization',
    'lib_plotly': 'Plotly - Interactive web-based visualization',
    'lib_statsmodels': 'Statsmodels - Statistical modeling and testing',
    'lib_scikit_image': 'Scikit-image - Image processing and computer vision',
    'lib_sklearn': 'Scikit-learn - Machine learning algorithms',
    'lib_tensorflow': 'TensorFlow - Deep learning framework',
    'lib_pytorch': 'PyTorch - Deep learning framework',
    'lib_keras': 'Keras - High-level neural networks API',
    'lib_opencv': 'OpenCV - Computer vision and image processing',
}

# Category descriptions for README files
CATEGORY_DESCRIPTIONS = {
    '01_fundamentals': 'Python fundamentals - variables, data types, operators, I/O, type casting, and strings',
    '02_data_structures': 'Python data structures - lists, tuples, sets, and dictionaries',
    '03_control_flow': 'Control flow - conditional statements and loops',
    '04_functions_modules': 'Functions, modules, packages, and file handling',
    '05_advanced_concepts': 'Advanced concepts - exception handling, OOP, iterators, decorators, lambda, datetime',
    '06_tools_libraries': 'Tools and libraries - regex, JSON, virtual environment, pip, testing, logging',
    '07_python_libraries': 'Python libraries - NumPy, SciPy, SymPy, Pandas, Matplotlib, Seaborn, Plotly, Statsmodels, Scikit-image, and more',
    '08_specialized_topics': 'Specialized topics - databases, threading, multiprocessing, networking',
    '09_applications': 'Applications - APIs, web scraping, GUI, data analysis, ML, web dev, automation',
    '10_professional': 'Professional development - design patterns, performance, security',
    '11_resources': 'Resources - projects, interview prep, cheat sheets, FAQ'
}

def create_library_structure(base_path):
    """Create the 07_python_libraries folder with all subfolders"""
    base_path = Path(base_path)
    libs_folder = base_path / '07_python_libraries'
    
    print("\n📚 Creating Python Libraries structure...")
    
    # Create main 07_python_libraries folder
    libs_folder.mkdir(parents=True, exist_ok=True)
    print(f"  ✅ Created: 07_python_libraries/")
    
    # Subfolders for each library
    subfolders = ['01_theory', '02_examples', '03_notebook', '04_projects']
    
    for lib_name, lib_desc in PYTHON_LIBRARIES.items():
        lib_path = libs_folder / lib_name
        lib_path.mkdir(parents=True, exist_ok=True)
        print(f"  ✅ Created: 07_python_libraries/{lib_name}/")
        
        # Create subfolders
        for sub in subfolders:
            sub_path = lib_path / sub
            sub_path.mkdir(parents=True, exist_ok=True)
            print(f"    └─ Created: {lib_name}/{sub}/")
        
        # Create README.md for each library
        readme_path = lib_path / 'README.md'
        lib_display = lib_name.replace('lib_', '').replace('_', ' ').title()
        if 'Scikit' in lib_display:
            lib_display = lib_display.replace('Scikit', 'Scikit-')
        
        readme_content = '# ' + lib_display + '\n\n'
        readme_content += '## Overview\n'
        readme_content += lib_desc + '\n\n'
        readme_content += '## Structure\n'
        readme_content += '- **01_theory/** - Theoretical concepts and documentation\n'
        readme_content += '- **02_examples/** - Code examples and demonstrations\n'
        readme_content += '- **03_notebook/** - Jupyter notebooks for interactive learning\n'
        readme_content += '- **04_projects/** - Practical projects and applications\n\n'
        readme_content += '## Installation\n'
        readme_content += '```bash\n'
        readme_content += 'pip install ' + lib_name.replace('lib_', '') + '\n'
        readme_content += '```\n\n'
        readme_content += '## Resources\n'
        readme_content += '- Official Documentation: https://docs.python.org/\n'
        readme_content += '- Community: https://www.python.org/community/\n\n'
        readme_content += '---\n'
        readme_content += '*This README was auto-generated during repository reorganization.*\n'
        
        with open(readme_path, 'w', encoding='utf-8') as f:
            f.write(readme_content)
        print(f"    └─ Created: {lib_name}/README.md")
    
    # Create main README for 07_python_libraries
    main_readme = libs_folder / 'README.md'
    main_content = '# 07 - Python Libraries\n\n'
    main_content += '## Overview\n'
    main_content += 'This section covers essential Python libraries for scientific computing, data analysis, visualization, and machine learning.\n\n'
    main_content += '## Included Libraries\n\n'
    main_content += '### Scientific Computing\n'
    main_content += '| Library | Description |\n'
    main_content += '|---------|-------------|\n'
    main_content += '| **NumPy** | Numerical computing with arrays and matrices |\n'
    main_content += '| **SciPy** | Scientific computing and algorithms |\n'
    main_content += '| **SymPy** | Symbolic mathematics and algebra |\n'
    main_content += '| **Pandas** | Data manipulation and analysis |\n\n'
    main_content += '### Visualization\n'
    main_content += '| Library | Description |\n'
    main_content += '|---------|-------------|\n'
    main_content += '| **Matplotlib** | 2D and 3D visualization |\n'
    main_content += '| **Seaborn** | Statistical data visualization |\n'
    main_content += '| **Plotly** | Interactive web-based visualization |\n\n'
    main_content += '### Machine Learning & AI\n'
    main_content += '| Library | Description |\n'
    main_content += '|---------|-------------|\n'
    main_content += '| **Scikit-learn** | Machine learning algorithms |\n'
    main_content += '| **TensorFlow** | Deep learning framework |\n'
    main_content += '| **PyTorch** | Deep learning framework |\n'
    main_content += '| **Keras** | High-level neural networks API |\n\n'
    main_content += '### Image Processing\n'
    main_content += '| Library | Description |\n'
    main_content += '|---------|-------------|\n'
    main_content += '| **OpenCV** | Computer vision and image processing |\n'
    main_content += '| **Scikit-image** | Image processing and computer vision |\n\n'
    main_content += '### Statistics\n'
    main_content += '| Library | Description |\n'
    main_content += '|---------|-------------|\n'
    main_content += '| **Statsmodels** | Statistical modeling and testing |\n\n'
    main_content += '## Structure\n'
    main_content += 'Each library follows the same structure:\n'
    main_content += '```\n'
    main_content += 'lib_name/\n'
    main_content += '├── 01_theory/      # Documentation and concepts\n'
    main_content += '├── 02_examples/    # Code examples\n'
    main_content += '├── 03_notebook/    # Jupyter notebooks\n'
    main_content += '└── 04_projects/    # Practical projects\n'
    main_content += '```\n\n'
    main_content += '## Learning Path\n'
    main_content += '1. Start with **NumPy** (foundation for all scientific libraries)\n'
    main_content += '2. Move to **Pandas** (data manipulation)\n'
    main_content += '3. Learn **Matplotlib** (visualization)\n'
    main_content += '4. Explore **SciPy** (advanced scientific computing)\n'
    main_content += '5. Dive into **SymPy** (symbolic math)\n'
    main_content += '6. Discover statistical libraries (**Seaborn**, **Statsmodels**)\n'
    main_content += '7. Master interactive visualization (**Plotly**)\n'
    main_content += '8. Explore image processing (**Scikit-image**, **OpenCV**)\n'
    main_content += '9. Dive into machine learning (**Scikit-learn**)\n'
    main_content += '10. Advanced deep learning (**TensorFlow**, **PyTorch**, **Keras**)\n\n'
    main_content += '## Prerequisites\n'
    main_content += '- Basic Python knowledge\n'
    main_content += '- Understanding of fundamentals (covered in sections 01-06)\n\n'
    main_content += '---\n'
    main_content += '*This directory was created during repository reorganization.*\n'
    
    with open(main_readme, 'w', encoding='utf-8') as f:
        f.write(main_content)
    print(f"  ✅ Created: 07_python_libraries/README.md")
    
    return libs_folder

def create_category_readmes(base_path):
    """Create README files for each category folder"""
    base_path = Path(base_path)
    
    for category, description in CATEGORY_DESCRIPTIONS.items():
        category_path = base_path / category
        if category_path.exists():
            readme_path = category_path / 'README.md'
            if not readme_path.exists():
                content = '# ' + category.replace('_', ' ').title() + '\n\n'
                content += description + '\n\n'
                content += '## Contents\n\n'
                content += 'This directory contains the following topics:\n\n'
                
                # Add subfolders as list
                subfolders = sorted([f for f in category_path.iterdir() if f.is_dir()])
                for folder in subfolders:
                    folder_name = folder.name
                    # Extract topic name (remove number prefix)
                    if '_' in folder_name:
                        topic = ' '.join(folder_name.split('_')[1:]).title()
                    else:
                        topic = folder_name.title()
                    content += '- [' + topic + '](./' + folder_name + '/)\n'
                
                content += '\n---\n'
                content += '*This README was auto-generated during repository reorganization.*\n'
                
                with open(readme_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  ✅ Created: {readme_path}")

def reorganize_folders(source_dir, dry_run=True):
    """
    Reorganize folders according to category mapping.
    
    Args:
        source_dir: Path to the source directory
        dry_run: If True, only show what would be moved without actually moving
    """
    source_path = Path(source_dir)
    moved_items = []
    errors = []
    
    print(f"\n{'='*60}")
    print(f"📁 Python Repository Reorganization")
    print(f"📍 Location: {source_path.absolute()}")
    print(f"{'='*60}\n")
    
    if dry_run:
        print("🔍 DRY RUN MODE - No files will be moved\n")
    
    # First, check if all source folders exist
    missing_folders = []
    for old_name in CATEGORY_MAPPING.keys():
        old_path = source_path / old_name
        if not old_path.exists():
            missing_folders.append(old_name)
    
    if missing_folders:
        print("⚠️  Warning: Some folders not found:")
        for folder in missing_folders[:5]:  # Show first 5
            print(f"  - {folder}")
        if len(missing_folders) > 5:
            print(f"  ... and {len(missing_folders) - 5} more")
        print()
    
    # Process each folder
    for old_name, new_path in CATEGORY_MAPPING.items():
        old_folder = source_path / old_name
        new_folder = source_path / new_path
        
        if not old_folder.exists():
            continue
            
        if not old_folder.is_dir():
            print(f"⚠️  Skipping {old_name} - not a directory")
            continue
        
        # Check if destination already exists
        if new_folder.exists():
            print(f"⚠️  Destination already exists: {new_path}")
            print(f"   Source: {old_name}")
            print(f"   Action: Skipping (to avoid data loss)")
            continue
        
        try:
            # Create parent directories
            new_folder.parent.mkdir(parents=True, exist_ok=True)
            
            if not dry_run:
                # Move the folder
                shutil.move(str(old_folder), str(new_folder))
                moved_items.append((old_name, new_path))
                print(f"✅ Moved: {old_name} -> {new_path}")
            else:
                print(f"🔄 Would move: {old_name} -> {new_path}")
                moved_items.append((old_name, new_path))
                
        except Exception as e:
            error_msg = f"❌ Error moving {old_name}: {e}"
            print(error_msg)
            errors.append(error_msg)
    
    # Create library structure (only in actual run)
    if not dry_run:
        print("\n📚 Creating Python Libraries structure...")
        create_library_structure(source_path)
        
        # Create category README files
        print("\n📝 Creating category README files...")
        create_category_readmes(source_path)
    
    # Summary
    print(f"\n{'='*60}")
    print("📊 SUMMARY")
    print(f"{'='*60}")
    print(f"Total folders to move: {len([m for m in CATEGORY_MAPPING.keys() if (source_path / m).exists()])}")
    print(f"Successfully {'moved' if not dry_run else 'would move'}: {len(moved_items)}")
    if not dry_run:
        print(f"Python libraries created: {len(PYTHON_LIBRARIES)}")
    if errors:
        print(f"Errors: {len(errors)}")
    
    if dry_run:
        print("\n💡 This was a DRY RUN. To actually perform the reorganization,")
        print("   run the script again with: reorganize_folders('.', dry_run=False)")
    
    return moved_items, errors

def create_backup_info(source_dir):
    """Create a backup information file before reorganization"""
    source_path = Path(source_dir)
    backup_file = source_path / 'REORGANIZATION_BACKUP_INFO.txt'
    
    content = f"""Python Repository Reorganization Backup Information
================================================

Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Original directory: {source_path.absolute()}

This reorganization was performed using the 'By Category' structure.

If you need to revert any changes, use the mapping below to move folders back.

CATEGORY MAPPING (New -> Original):
"""
    
    # Reverse mapping for recovery
    for old_name, new_path in CATEGORY_MAPPING.items():
        content += f"\n{new_path} -> {old_name}"
    
    content += """

PYTHON LIBRARIES CREATED:
"""
    for lib_name, lib_desc in PYTHON_LIBRARIES.items():
        content += f"\n07_python_libraries/{lib_name}/ - {lib_desc}"
    
    content += """

To revert a specific folder:
  shutil.move('new_path', 'original_path')

To revert everything, you can use this mapping in reverse.

---
*This file was auto-generated before reorganization.*
"""
    
    with open(backup_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"📝 Created backup info: {backup_file}")

def main():
    """Main function with user interaction"""
    # Get the current directory
    current_dir = Path.cwd()
    
    print(f"\n📂 Current directory: {current_dir}")
    print("\nThis script will reorganize your Python learning folders by category.")
    print("It will create 11 main categories and move existing folders into them.")
    print("\n⚠️  WARNING: This will restructure your directory!")
    print("   Make sure you have a backup or are using version control (git).")
    
    # Ask for confirmation
    print("\nDo you want to:")
    print("  1. Preview changes (DRY RUN) - Recommended first")
    print("  2. Perform actual reorganization")
    print("  3. Exit")
    
    choice = input("\nEnter your choice (1, 2, or 3): ").strip()
    
    if choice == "1":
        print("\n🔍 Running DRY RUN...")
        reorganize_folders(current_dir, dry_run=True)
        
    elif choice == "2":
        # Double confirm
        confirm = input("\n⚠️  Are you sure? This will move files permanently! (yes/no): ").strip().lower()
        if confirm in ['yes', 'y']:
            # Create backup info
            create_backup_info(current_dir)
            
            # Perform actual reorganization
            print("\n🔄 Starting reorganization...")
            moved, errors = reorganize_folders(current_dir, dry_run=False)
            
            if moved:
                print("\n✅ Reorganization complete!")
                print("\n📋 Next steps:")
                print("  1. Review the new structure")
                print("  2. Check the README files in each category")
                print("  3. Check the new 07_python_libraries folder")
                print("  4. Update any references or documentation")
                print("  5. Commit changes to version control")
                
            if errors:
                print(f"\n⚠️  There were {len(errors)} errors. Please check the output above.")
        else:
            print("\n❌ Reorganization cancelled.")
            
    else:
        print("\n❌ Exiting...")
        sys.exit(0)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Operation cancelled by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        sys.exit(1)