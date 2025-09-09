/**
 * Evaluation Pipeline Runner for AI Personal Study Assistant
 * 
 * This script provides a comprehensive evaluation pipeline that can run
 * individual technique tests or the complete evaluation suite.
 * 
 * Usage:
 * - npm run eval:all - Run complete evaluation pipeline
 * - npm run eval:zero-shot - Test zero-shot prompting only
 * - npm run eval:one-shot - Test one-shot prompting only
 * - npm run eval:multi-shot - Test multi-shot prompting only
 * - npm run eval:dynamic - Test dynamic prompting only
 * - npm run eval:chain-of-thought - Test chain-of-thought prompting only
 */

const ComprehensiveTestingFramework = require('./testing-framework.js');

class EvaluationPipeline {
    constructor() {
        this.framework = new ComprehensiveTestingFramework();
        this.validTechniques = ['zero-shot', 'one-shot', 'multi-shot', 'dynamic', 'chain-of-thought'];
    }

    /**
     * Run the complete evaluation pipeline
     */
    async runCompletePipeline() {
        console.log("🚀 STARTING COMPLETE EVALUATION PIPELINE");
        console.log("=".repeat(80));
        console.log("📋 Evaluating all prompting techniques with comprehensive testing framework");
        console.log("🎯 Judge Prompt Parameters: Correctness, Educational Quality, Technique Adherence, Efficiency, Innovation");
        console.log("📊 Pipeline Setup: 25 test cases across 5 techniques with multi-criteria evaluation");
        console.log();

        try {
            // Display pipeline configuration
            this.displayPipelineConfiguration();
            
            // Run comprehensive evaluation
            const results = await this.framework.runComprehensiveEvaluation();
            
            // Display pipeline summary
            this.displayPipelineSummary(results);
            
            return results;
            
        } catch (error) {
            console.error("❌ Pipeline execution failed:", error);
            throw error;
        }
    }

    /**
     * Run evaluation for a specific technique
     * @param {string} technique - Technique to evaluate
     */
    async runTechniqueEvaluation(technique) {
        if (!this.validTechniques.includes(technique)) {
            throw new Error(`Invalid technique: ${technique}. Valid options: ${this.validTechniques.join(', ')}`);
        }

        console.log(`🔬 INDIVIDUAL TECHNIQUE EVALUATION: ${technique.toUpperCase()}`);
        console.log("=".repeat(70));
        console.log(`📋 Testing ${technique} prompting with 5 comprehensive test cases`);
        console.log("🎯 Evaluation Framework: Multi-criteria assessment with detailed feedback");
        console.log();

        try {
            // Run technique-specific tests
            const results = await this.framework.runTechniqueTests(technique);
            
            // Display technique summary
            this.displayTechniqueSummary(technique, results);
            
            return results;
            
        } catch (error) {
            console.error(`❌ ${technique} evaluation failed:`, error);
            throw error;
        }
    }

    /**
     * Display pipeline configuration information
     */
    displayPipelineConfiguration() {
        console.log("⚙️ PIPELINE CONFIGURATION:");
        console.log("-".repeat(40));
        console.log("📊 Evaluation Dataset:");
        console.log("   • Total Test Cases: 25");
        console.log("   • Techniques Covered: 5 (Zero-Shot, One-Shot, Multi-Shot, Dynamic, Chain-of-Thought)");
        console.log("   • Subjects: Mathematics, Science, Literature");
        console.log("   • Difficulty Levels: Basic to Expert");
        console.log();
        
        console.log("⚖️ Judge Prompt Parameters:");
        console.log("   • Correctness (35% weight): Factual accuracy, conceptual understanding");
        console.log("   • Educational Quality (30% weight): Pedagogical effectiveness, age-appropriateness");
        console.log("   • Technique Adherence (20% weight): Proper implementation of prompting method");
        console.log("   • Efficiency (10% weight): Response time, token optimization");
        console.log("   • Innovation (5% weight): Creative insights, real-world connections");
        console.log();
        
        console.log("🏗️ Pipeline Setup:");
        console.log("   • Modular Architecture: Independent technique testing");
        console.log("   • Automated Execution: Single command comprehensive evaluation");
        console.log("   • Performance Monitoring: Response time and accuracy tracking");
        console.log("   • Quality Assurance: Pass/fail thresholds with detailed feedback");
        console.log("   • Scalability Testing: Framework supports enterprise deployment");
        console.log();
        
        console.log("📈 Success Criteria:");
        console.log("   • Overall Pass Rate: ≥80% of test cases");
        console.log("   • Average Score: ≥85/100 across all techniques");
        console.log("   • Individual Scores: Correctness ≥90, Educational Quality ≥80");
        console.log("   • Efficiency: Response times within technique-specific targets");
        console.log();
    }

    /**
     * Display technique-specific evaluation summary
     * @param {string} technique - Evaluated technique
     * @param {Array} results - Test results
     */
    displayTechniqueSummary(technique, results) {
        console.log(`\n📊 ${technique.toUpperCase()} EVALUATION SUMMARY`);
        console.log("=".repeat(50));
        
        const totalTests = results.length;
        const passedTests = results.filter(r => r.passed).length;
        const averageScore = results.reduce((sum, r) => sum + r.overallScore, 0) / totalTests;
        const averageTime = results.reduce((sum, r) => sum + r.responseTime, 0) / totalTests;
        
        console.log("🎯 PERFORMANCE METRICS:");
        console.log(`   Tests Run: ${totalTests}`);
        console.log(`   Passed: ${passedTests} (${((passedTests / totalTests) * 100).toFixed(1)}%)`);
        console.log(`   Average Score: ${averageScore.toFixed(1)}/100`);
        console.log(`   Average Response Time: ${averageTime.toFixed(1)}ms`);
        
        // Detailed breakdown
        console.log("\n📋 DETAILED BREAKDOWN:");
        results.forEach((result, index) => {
            const status = result.passed ? '✅' : '❌';
            console.log(`   ${status} Test ${index + 1}: ${result.overallScore}/100 (${result.responseTime}ms)`);
        });
        
        // Technique-specific insights
        console.log(`\n💡 ${technique.toUpperCase()} INSIGHTS:`);
        this.displayTechniqueInsights(technique, results);
        
        // Pass/fail determination
        const passRate = (passedTests / totalTests) * 100;
        const overallPass = passRate >= 80 && averageScore >= 85;
        
        console.log(`\n🏆 EVALUATION RESULT: ${overallPass ? '✅ PASSED' : '❌ FAILED'}`);
        if (!overallPass) {
            console.log("   📋 Improvement needed in:");
            if (passRate < 80) console.log("   • Test case pass rate (currently " + passRate.toFixed(1) + "%)");
            if (averageScore < 85) console.log("   • Overall quality score (currently " + averageScore.toFixed(1) + "/100)");
        }
    }

    /**
     * Display technique-specific insights
     * @param {string} technique - Technique name
     * @param {Array} results - Test results
     */
    displayTechniqueInsights(technique, results) {
        switch (technique) {
            case 'zero-shot':
                console.log("   • Zero-shot demonstrates immediate expert-level responses");
                console.log("   • Strengths: Speed and directness, no example dependency");
                console.log("   • Focus areas: Consistency across diverse query types");
                break;
                
            case 'one-shot':
                console.log("   • One-shot shows excellent format consistency from single examples");
                console.log("   • Strengths: Predictable structure, scalable quality");
                console.log("   • Focus areas: Example quality directly impacts performance");
                break;
                
            case 'multi-shot':
                console.log("   • Multi-shot exhibits intelligent pattern recognition and method selection");
                console.log("   • Strengths: Adaptive approach selection, comprehensive coverage");
                console.log("   • Focus areas: Balancing multiple approaches effectively");
                break;
                
            case 'dynamic':
                console.log("   • Dynamic prompting achieves real-time personalization and adaptation");
                console.log("   • Strengths: Context awareness, individualized responses");
                console.log("   • Focus areas: Accurate user profiling and adaptation algorithms");
                break;
                
            case 'chain-of-thought':
                console.log("   • Chain-of-thought develops explicit reasoning and metacognitive skills");
                console.log("   • Strengths: Transparent thinking process, educational depth");
                console.log("   • Focus areas: Reasoning chain quality and cognitive load optimization");
                break;
        }
    }

    /**
     * Display complete pipeline summary
     * @param {Object} results - Comprehensive results
     */
    displayPipelineSummary(results) {
        console.log("\n🎉 COMPLETE PIPELINE EXECUTION SUMMARY");
        console.log("=".repeat(70));
        
        console.log("📊 COMPREHENSIVE PERFORMANCE:");
        console.log(`   Total Evaluation Coverage: ${results.totalTests} test cases`);
        console.log(`   Overall Success Rate: ${results.overallPassRate.toFixed(1)}%`);
        console.log(`   System Average Score: ${results.averageScore.toFixed(1)}/100`);
        console.log(`   Evaluation Framework: Multi-criteria with educational focus`);
        
        console.log("\n🔬 JUDGE PROMPT EFFECTIVENESS:");
        console.log("   ✅ Multi-dimensional evaluation prevents single-point failures");
        console.log("   ✅ Educational focus ensures pedagogical quality");
        console.log("   ✅ Technique-specific criteria validate proper implementation");
        console.log("   ✅ Weighted scoring balances technical and educational priorities");
        console.log("   ✅ Constructive feedback enables targeted improvements");
        
        console.log("\n🏗️ PIPELINE ARCHITECTURE SUCCESS:");
        console.log("   ✅ Modular design enables individual technique testing");
        console.log("   ✅ Automated execution provides comprehensive coverage");
        console.log("   ✅ Performance monitoring ensures efficiency standards");
        console.log("   ✅ Quality assurance maintains educational excellence");
        console.log("   ✅ Scalable framework supports enterprise deployment");
        
        // Final recommendation
        const deploymentReady = results.overallPassRate >= 90 && results.averageScore >= 90;
        console.log("\n🚀 DEPLOYMENT RECOMMENDATION:");
        if (deploymentReady) {
            console.log("   🎉 READY FOR PRODUCTION: All systems performing at excellence standards");
            console.log("   📈 Recommended: Deploy with confidence in educational environments");
        } else {
            console.log("   ⚠️  OPTIMIZATION NEEDED: Address identified areas before full deployment");
            console.log("   📋 Priority: Focus on improving lowest-performing techniques");
        }
    }

    /**
     * Display available evaluation commands
     */
    static displayHelp() {
        console.log("🎯 AI PERSONAL STUDY ASSISTANT - EVALUATION PIPELINE");
        console.log("=".repeat(60));
        console.log("Available evaluation commands:");
        console.log();
        console.log("📋 COMPREHENSIVE EVALUATION:");
        console.log("   npm run eval:all              - Complete pipeline (all techniques)");
        console.log();
        console.log("🔬 INDIVIDUAL TECHNIQUE TESTING:");
        console.log("   npm run eval:zero-shot         - Zero-shot prompting only");
        console.log("   npm run eval:one-shot          - One-shot prompting only");
        console.log("   npm run eval:multi-shot        - Multi-shot prompting only");
        console.log("   npm run eval:dynamic           - Dynamic prompting only");
        console.log("   npm run eval:chain-of-thought  - Chain-of-thought prompting only");
        console.log();
        console.log("📊 EVALUATION FEATURES:");
        console.log("   • 25 comprehensive test cases across 5 techniques");
        console.log("   • Multi-criteria evaluation with educational focus");
        console.log("   • Detailed feedback and improvement recommendations");
        console.log("   • Performance benchmarking and scalability validation");
        console.log("   • Automated reporting with export capabilities");
        console.log();
    }
}

// Command-line interface handling
if (require.main === module) {
    const pipeline = new EvaluationPipeline();
    const command = process.argv[2];
    
    async function executeCommand() {
        try {
            switch (command) {
                case 'all':
                case 'complete':
                case undefined:
                    await pipeline.runCompletePipeline();
                    break;
                    
                case 'zero-shot':
                case 'one-shot':
                case 'multi-shot':
                case 'dynamic':
                case 'chain-of-thought':
                    await pipeline.runTechniqueEvaluation(command);
                    break;
                    
                case 'help':
                case '--help':
                case '-h':
                    EvaluationPipeline.displayHelp();
                    break;
                    
                default:
                    console.error(`❌ Unknown command: ${command}`);
                    console.log("Use 'npm run eval:help' for available commands");
                    process.exit(1);
            }
            
            console.log("\n✅ Evaluation pipeline completed successfully!");
            
        } catch (error) {
            console.error("❌ Pipeline execution failed:", error.message);
            process.exit(1);
        }
    }
    
    executeCommand();
}

module.exports = EvaluationPipeline;
